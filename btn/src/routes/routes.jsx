import Home from "../Pages/Home";
import Typography from "../Pages/Typography";
import Buttons from "../Pages/Buttons";
import Inputs from "../Pages/Inputs";
const routs = [
  {
    path: "/",
    exact: true,
    main: () => <Home />,
  },
  {
    path: "/colors",
    main: () => <h1>colors</h1>,
  },
  {
    path: "/typography",
    main: () => <Typography />,
  },
  {
    path: "/buttons",
    main: () => <Buttons />,
  },
  {
    path: "/inputs",
    main: () => <Inputs />,
  },
  {
    path: "/spaces",
    main: () => <h1>Spaces</h1>,
  },
  {
    path: "/grid",
    main: () => <h1>grid</h1>,
  },
 
];

export default routs;
