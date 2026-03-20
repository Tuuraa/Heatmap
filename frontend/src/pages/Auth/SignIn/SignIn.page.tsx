import { useOutletContext } from "react-router";
import type { AuthController } from "../Auth.controller";
import { observer } from "mobx-react-lite";
import { SignIn } from "./SignIn.view";

const ObservableSignIn = observer(SignIn);

export function SignInPage() {
    const controller = useOutletContext<AuthController>();

    return <ObservableSignIn controller={controller} />
}