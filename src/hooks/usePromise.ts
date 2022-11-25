import { useEffect, useState } from 'react';

export type TPromiseStatus = {
  loading: boolean;
  success: boolean;
  error: boolean;
  done: boolean;
};

export function usePromise<T>(promise: () => Promise<T> | null, cleanUp?: () => void) {
  const [promiseStatus, setPromiseStatus] = useState<{ data: null | T } & TPromiseStatus>({
    loading: false,
    error: false,
    success: false,
    done: false,
    data: null,
  });

  useEffect(() => {
    setPromiseStatus((status) => ({
      ...status,
      error: false,
      loading: true,
    }));

    const runPromise = async () => {
      try {
        if (promise) {
          const data = await promise();
          setPromiseStatus((status) => ({
            ...status,
            data,
            loading: false,
            success: true,
            done: true,
          }));
        }
      } catch (error) {
        setPromiseStatus((status) => ({
          ...status,
          error: true,
          loading: false,
          done: true,
        }));
      }
    };

    runPromise();

    return cleanUp?.();
  }, [promise, cleanUp]);

  return {
    ...promiseStatus,
  };
}

export default usePromise;
