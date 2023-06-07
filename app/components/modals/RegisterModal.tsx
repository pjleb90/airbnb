'use client';

import axious from 'axios';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { useCallback, useState } from 'react';
import {
  FieldValues,
  SubmitHandler,
  useForm
} from 'react-hook-form';

import useRegiseterModal from '@/app/hooks/useRegisterModal';
import axios from 'axios';
import Modal from './Modal';

const RegisterModal = () => {
  const registerModal = useRegiseterModal();
  const [isLoading, SetIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: {
      errors,
    }
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    SetIsLoading(true);

    axios.post('/api/register', data)
      .then(() => {
        registerModal.onClose();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        SetIsLoading(false);
      })
  }
    return (
        <Modal
          disabled={isLoading}
          isOpen={registerModal.isOpen}
          title="Register"
          actionLabel='Continue'
          onClose={registerModal.onClose}
          onSubmit={handleSubmit(onSubmit)}
        />
      );
}

export default RegisterModal;