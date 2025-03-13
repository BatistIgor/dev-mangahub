import React from 'react';
import { LoginForm }  from '@/components/shared/login-form';
import { Logo } from '@/components/shared/logo'

interface Props {
  className?: string;
}

export const Login: React.FC<Props> = ({ className }) => {
  return (
    <div className='flex flex-col items-center mt-[10vh]'>
      <div className='px-5 flex flex-col items-center '>
        <Logo className='mb-5'/>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login