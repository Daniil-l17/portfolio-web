import { Blur } from '@/components/Blur/Blur';
import { Header } from '@/components/Header';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Header />
			<Blur left='245px' bottom='311px' color='rgba(236, 236, 236, 0.751)' />
			<Blur right='225px' bottom='611px' color='rgba(221, 221, 221, 0.759)' />
			<div className=' min-h-[100vh]'>{children}</div>
		</>
	);
};
