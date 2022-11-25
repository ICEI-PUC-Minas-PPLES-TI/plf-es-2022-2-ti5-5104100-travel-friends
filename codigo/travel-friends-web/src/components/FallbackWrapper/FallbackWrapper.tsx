/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Spinner from 'react-bootstrap/Spinner';

// import DefaultEmpty from '../DefaultEmpty/DefaultEmpty';
// import Loading from '../Loading/Loading';
// import LoadingModal from '../LoadingModal/LoadingModal';
// import DefaultError from '../DefaultError/DefaultError';
import { Theme } from '../../utils';

interface IFallbackWrapperProps {
  loading: boolean;
  success: boolean;
  error?: boolean | undefined | null;
  showEmptyState?: boolean | undefined | null;
  loadingComponent?: 'default' | 'modalLoading';
  renderCustomLoading?: () => ReactElement | undefined | null;
  renderContent: () => ReactElement | null;
  renderCustomError?: () => ReactElement | undefined | null;
  renderCustomEmptyState?: () => ReactElement | undefined | null;
}

const FallbackWrapper: React.FC<IFallbackWrapperProps> = ({
  success,
  loading,
  error,
  showEmptyState,
  loadingComponent = 'default',
  renderCustomLoading,
  renderContent,
  renderCustomError,
  renderCustomEmptyState,
}) => {
  if (error) {
    return renderCustomError?.() ?? null;
  }

  if (loading) {
    if (loadingComponent === 'default') {
      return <LoadingSC size="large" />;
    }
    return renderCustomLoading?.() ?? null;
  }

  if (showEmptyState) {
    return renderCustomEmptyState?.() ?? null;
  }

  if (success && renderContent) {
    return <>{renderContent()}</>;
  }

  return null;
};

const LoadingSC = styled(Spinner)`
  background-color: ${Theme.colors.yellow};
  flex: 1;
`;

export default FallbackWrapper;
