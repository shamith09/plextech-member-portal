import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { Stack, Modal, CircularProgress, Button } from '@mui/material';
import { RequestsBoard } from 'app/components/RequestsBoard';
import { useEffect, useState } from 'react';
import { ReimbursementForm } from 'app/components/ReimbursementForm';
import { AllRequests, Error, Request } from 'types/types';
import { ErrorModal } from 'app/components/ErrorModal';
import { styled as muiStyled } from '@mui/system';
import dayjs from 'dayjs';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

interface Props {
  token: string | null;
  removeToken: () => void;
}

export function HomePage(props: Props) {
  const [requests, setRequests] = useState<AllRequests>({
    pendingReview: [],
    underReview: [],
    errors: [],
    approved: [],
    declined: [],
  });
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [request, setRequest] = useState<Request | null>(null);
  const [error, setError] = useState<Error>();
  const [isTreasurer, setIsTreasurer] = useState<boolean>(false);
  const [teams, setTeams] = useState<string[]>([]);
  const [canEdit, setCanEdit] = useState<boolean>(false);
  const [userName, setUserName] = useState<{
    firstName: string;
    lastName: string;
  }>({ firstName: '', lastName: '' });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  useEffect(() => {
    const f = async () => {
      setIsLoading(true);
      try {
        const url = `${process.env.REACT_APP_BACKEND_URL}/requests/`;
        const response = await fetch(url, {
          method: 'GET',
          mode: 'cors',
          cache: 'no-cache',
          credentials: 'omit',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + props.token,
          },
          redirect: 'follow',
          referrerPolicy: 'no-referrer',
        });

        if (response.status === 401 || response.status === 422) {
          props.removeToken();
        }

        if (!response.ok) {
          console.error(response);
          setError({
            errorCode: response.status,
            errorMessage: response.statusText,
          });
          return;
        }

        const res = await response.json();
        setIsTreasurer(res.treasurer);
        setTeams(res.teams);
        setUserName({ firstName: res.firstName, lastName: res.lastName });

        delete res.treasurer;
        delete res.teams;
        delete res.firstName;
        delete res.lastName;
        setRequests({
          pendingReview: res.pendingReview.map((request: Request) => ({
            ...request,
            date: dayjs(request.date),
          })),
          underReview: res.underReview.map((request: Request) => ({
            ...request,
            date: dayjs(request.date),
          })),
          errors: res.errors.map((request: Request) => ({
            ...request,
            date: dayjs(request.date),
          })),
          declined: res.declined.map((request: Request) => ({
            ...request,
            date: dayjs(request.date),
          })),
          approved: res.approved.map((request: Request) => ({
            ...request,
            date: dayjs(request.date),
          })),
        });
        setIsLoading(false);
      } catch (e: any) {
        setError({
          errorMessage: e.toString(),
        });
        console.error(e);
        return;
      }
    };

    f();
  }, [props, props.token]);

  const onClose = () => {
    setShowModal(false);
  };

  const onError = (
    response: Response | { status: null; statusText: string },
  ) => {
    if (response.status) {
      setError({
        errorCode: response.status,
        errorMessage: response.statusText,
      });
    } else {
      setError({
        errorMessage: response.statusText,
      });
    }
  };

  const onRequest = () => {
    handleShowModal(null, false);
  };

  const onSubmit = (newRequest: Request, remove?: boolean) => {
    if (remove) {
      setRequests(prevState => ({
        ...prevState,
        pendingReview: [
          ...prevState.pendingReview.filter(
            (request: Request) => request._id !== newRequest._id,
          ),
        ],
        errors: [
          ...prevState.errors.filter(
            (request: Request) => request._id !== newRequest._id,
          ),
        ],
      }));
    } else {
      setRequests(prevState => ({
        ...prevState,
        pendingReview: [
          newRequest,
          ...prevState.pendingReview.filter(
            (request: Request) => request._id !== newRequest._id,
          ),
        ],
        errors: [
          ...prevState.errors.filter(
            (request: Request) => request._id !== newRequest._id,
          ),
        ],
      }));
    }
  };

  const handleShowModal = (newRequest: Request | null, mine: boolean) => {
    setRequest(newRequest);
    setCanEdit(!isTreasurer || mine || !newRequest);
    setShowModal(true);
  };

  return (
    <>
      <Helmet>
        <title>Reimbursements</title>
        <meta name="description" content="Your finance dashboard" />
      </Helmet>
      {error ? (
        <ErrorModal open={!error} error={error} />
      ) : (
        <>
          <StyledModal open={showModal} onClose={onClose}>
            <>
              <ReimbursementForm
                request={request}
                teams={teams}
                setRequests={setRequests}
                onClose={onClose}
                onSubmit={onSubmit}
                onError={onError}
                token={props.token}
                canEdit={canEdit}
                userName={userName}
              />
            </>
          </StyledModal>
          {isLoading && <StyledCircularProgress />}

          <StyledStack justifyContent="space-between">
            <RequestsBoard
              requests={isLoading ? null : requests}
              onEdit={handleShowModal}
              onRequest={onRequest}
              isTreasurer={isTreasurer}
              token={props.token}
              userName={userName}
            />
          </StyledStack>
          <StyledButton
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            startIcon={<KeyboardArrowUpIcon />}
            disableElevation
            disableFocusRipple
            disableRipple
            TouchRippleProps={{ style: { display: 'none' } }}
            sx={{
              transform: `translateX(-50%) ${
                isVisible ? 'translateY(0%)' : 'translateY(100%)'
              }`,
              transition: isVisible
                ? 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                : 'transform 0.3s cubic-bezier(0.6, -0.28, 0.735, 0.045)',
              '&:hover': {
                background: 'transparent',
              },
            }}
          >
            Back to Top
          </StyledButton>
        </>
      )}
    </>
  );
}

const StyledStack = styled(Stack)`
  width: 100%;
  height: 100%;
  padding-top: 24px;
  padding-left: 48px;
  padding-right: 48px;
`;

const StyledButton = muiStyled(Button)`
  position: fixed;
  bottom: 8px;
  margin: auto;
  left: 50%;
  transition: transform 0.3s ease-in-out;
`;

const StyledModal = styled(Modal)`
  width: 50%;
  min-width: 500px;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  padding: 64px;
  overflow: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const StyledCircularProgress = muiStyled(CircularProgress)`
  color: rgb(255, 138, 0);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;
