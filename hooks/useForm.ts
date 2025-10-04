// FIX: Import React to resolve 'Cannot find namespace React' errors. The 'React' namespace is required for event types like React.ChangeEvent and React.FormEvent.
import React, { useState, useCallback } from 'react';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

interface UseFormReturn<T> {
  values: T;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>, onSubmit: () => Promise<void>) => void;
  status: FormStatus;
  resetForm: () => void;
}

export function useForm<T,>(initialState: T): UseFormReturn<T> {
  const [values, setValues] = useState<T>(initialState);
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>, onSubmit: () => Promise<void>) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      await onSubmit();
      setStatus('success');
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus('error');
    }
  }, []);

  const resetForm = useCallback(() => {
    setValues(initialState);
    setStatus('idle');
  }, [initialState]);

  return { values, handleChange, handleSubmit, status, resetForm };
}