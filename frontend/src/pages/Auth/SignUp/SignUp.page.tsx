import { useOutletContext } from "react-router";
import type { AuthController } from "../Auth.controller";
import { observer } from "mobx-react-lite";
import { SignUp } from "./SignUp.view";

const ObservableSignUp = observer(SignUp);

export function SignUpPage() {
    const controller = useOutletContext<AuthController>();

    return <ObservableSignUp controller={controller} />
}