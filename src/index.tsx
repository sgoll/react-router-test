import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  MemoryRouter,
  NavLink,
  Route,
  Routes,
  useMatch,
  useResolvedPath,
} from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1>navigation</h1>
      <ul>
        <li>
          <NavLink to="ipsum">ipsum</NavLink>
        </li>
      </ul>

      <h1>content</h1>
      <Routes>
        <Route path="ipsum/*" element={<Ipsum />} />
        <Route path="/" element={<div>go to ipsum</div>} />
      </Routes>

      <h2>path matching</h2>
      <h3>ipsum (okay in 6.19.0)</h3>
      <div>{renderMatch("ipsum")}</div>
    </div>
  );
};

const Ipsum = () => {
  return (
    <div>
      <h2>sub-navigation</h2>
      <ul>
        <li>
          <NavLink to="dolor">dolor</NavLink>
        </li>
      </ul>

      <h2>sub-content</h2>
      <Routes>
        <Route path="dolor" element={<div>dolor</div>} />
        <Route path="/" element={<div>go to dolor</div>} />
      </Routes>

      <h2>path matching</h2>
      <h3>dolor (wrong in 6.19.0)</h3>
      <div>{renderMatch("dolor")}</div>
    </div>
  );
};

const renderMatch = (toPath: string) => {
  const path = useResolvedPath(toPath);
  const match = useMatch(path.pathname);
  const active = match !== null;

  return (
    <dl>
      <dt>useResolvedPath({JSON.stringify(toPath)})</dt>
      <dd>{JSON.stringify(path)}</dd>
      <dt>useMatch()</dt>
      <dd>{JSON.stringify(match)}</dd>
      <dt>active</dt>
      <dd>{JSON.stringify(active)}</dd>
    </dl>
  );
};

ReactDOM.render(
  <MemoryRouter>
    <App />
  </MemoryRouter>,
  document.getElementById("app")
);
