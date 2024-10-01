'use client';

import { useRouter } from 'next/navigation';

export const LoginForm = () => {
  const router = useRouter();
  const client_id = 'babc5bac-d836-4afc-afe7-f3374fb9fefd';
  // const client_secret = '286a01083ee5c6e1260179999ff97ced';
  const redirect_uri = 'http://localhst:3000';
  const code_challenge = process.env.NEXT_PUBLIC_CODE_CHALLENGE;
  const url = `http://localhost:3001/login?response_type=code&client_id=${client_id}&redirect_uri=${redirect_uri}&code_challenge=${code_challenge}&code_challenge_method=S256`;
  return (
    <div className="flex items-center p-5 space-x-2">
      <span className="text-2xl">App Con</span>
      <div
        onClick={() => {
          router.push(url);
        }}
        className="py-2 px-3 bg-gray-200 rounded-lg cursor-pointer"
      >
        Login
      </div>
    </div>
  );
};
