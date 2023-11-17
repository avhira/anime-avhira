import { authUserSession } from '@/libs/auth-libs';
import Image from 'next/image';

export default async function Page() {
  const user = await authUserSession();

  return (
    <div className="text-color-primary">
      <h1>DASHBOARD</h1>
      <h3>WELCOME {user.name}</h3>
      <Image src={user.image} alt="..." width={250} height={250} />
    </div>
  );
}
