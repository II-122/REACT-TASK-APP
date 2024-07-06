import { useTypedSelector } from "./redux"

export const useAuth = () => {
    const { email, id } = useTypedSelector((state) => state.user);

    return {
        isAuth: !!email,
        email,
        id,
    };
};
