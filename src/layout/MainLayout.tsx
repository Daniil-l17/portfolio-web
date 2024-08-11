
import { Header } from '@/components/Header';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Header />
      <span className="blur1"></span>
      <span className="blur2"></span>
      <div className=' min-h-[100vh]'>
			{children}
      </div>
		</>
	);
};
