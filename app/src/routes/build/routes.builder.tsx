import { FC } from "react";
import { RouteProps, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { ROUTES_FRONT } from "../../constants";
import { DashBoardScreen, LandingPageScreen } from "../../ui";
import { PublicRoute } from "../custom";

const { LANDING_PAGE, DASH_BOARD } = ROUTES_FRONT;

type RouteBuild = {
    path: string,
    exact: boolean,
    component: FC,
    CustomRoute: FC<RouteProps>
}

const RouterBuilder = () => {
    const builder: RouteBuild[] = [
        {
            path: DASH_BOARD,
            exact: true,
            component: DashBoardScreen,
            CustomRoute: PublicRoute
        },
        {
            path: LANDING_PAGE,
            exact: false,
            component: LandingPageScreen,
            CustomRoute: PublicRoute
        }
    ]
    return (
        <BrowserRouter>
            <Switch>
                {
                    builder.map(({ component, exact, path, CustomRoute }, index) => (
                        <CustomRoute key={index} component={component} exact={exact} path={path} />
                    )
                    )
                }
            </Switch>
        </BrowserRouter>
    )
}

export { RouterBuilder }