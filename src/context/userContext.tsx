import React, { createContext, useContext, useState } from "react";

export interface User {
	id: number;
	user_name: string;
	user_password: string;
	email: string;
}

interface UserContextType {
	user: User | null;
	setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const UserContext = createContext<UserContextType>({
	user: null,
	setUser: () => null,
});

export const useUserContext = () => useContext(UserContext);

export const UserProvider: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	const [user, setUser] = useState<User | null>(null);

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};
