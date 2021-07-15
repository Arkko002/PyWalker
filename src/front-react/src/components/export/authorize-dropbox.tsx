import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {AppDispatch} from "../../store/store";
import {authSuccess, authFailure} from "../../store/dropbox";
import {useLocation} from "react-router";
import {sendAuthRequest} from "../../adapters/auth.service"
import {RootState} from "../../store/store";
import Loader from "react-loader-spinner";
import AuthSuccess from "./auth-success";
import AuthFailure from "./auth-failure";

function useQueryCode() {
    return new URLSearchParams(useLocation().search).get("code");
}

function AuthorizeDropbox(): React.ReactElement {
    const dropboxState = useSelector((state: RootState) => state.dropbox)
    const dispatch: AppDispatch = useDispatch();
    const code = useQueryCode();

    useEffect(() => {
        if (code === null || code.length === 0) return;

        sendAuthRequest(code)
            .then(res => {
                if (res) {
                    dispatch(authSuccess(code));
                    return;
                }

                dispatch(authFailure(code));
            })
            .catch(_ => {
                dispatch(authFailure(code))
            });
    });

    const renderAuthElement = () => {
        if (dropboxState.loading) {
            return <Loader type="RevolvingDot" timeout={3000} color="#00BFFF"/>
        }

        if (dropboxState.isAuthorized) {
            return <AuthSuccess/>

        }
        
        return <AuthFailure/>
    }

    return (
        <div>
            {renderAuthElement}
        </div>
    )
}

export default AuthorizeDropbox;
