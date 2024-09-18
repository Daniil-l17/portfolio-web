'use client'
import { Bio } from '@/components/Bio';
import { Greetings } from '@/components/Greetings';
import { Loader } from '@/components/loader/Loader';
import { Technologies } from '@/components/Technologies';
import { Сontacts } from '@/components/Сontacts';
import { useEffect, useState } from 'react';

export const Home = () => {
	const [loading, setLoading] = useState(true);
  
	useEffect(() => {
		setLoading(false);
	}, []);

  

	if (loading) return <Loader />;

	return (
		<>
			<Greetings />
			<Bio />
			<Technologies />
			<Сontacts />
		</>
	);
};
