import React, { createContext, useContext, useState, useEffect } from "react";

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
	const [user, setUser] = useState<User | null>(() => {
		const storedUser = localStorage.getItem("user");
		return storedUser ? JSON.parse(storedUser) : null;
	});

	useEffect(() => {
		if (user) {
			localStorage.setItem("user", JSON.stringify(user));
		} else {
			localStorage.removeItem("user");
		}
	}, [user]);

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};
