"use client";

import { useEffect, useState } from "react";

export function useAsync<T>(fn: () => Promise<T>) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    fn().then(
      (data) => {
        setData(data);
        setLoading(false);
      },
      (error) => {
        setError(error);
        setLoading(false);
      },
    );
  }, [fn]);

  return { loading, error, data };
}
