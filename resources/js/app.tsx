import "./bootstrap";
import "../css/app.css";

import React from "react";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createRoot } from 'react-dom/client';
//const container = document.getElementById('app');
//const root = createRoot(container!); // createRoot(container!) if you use TypeScript
//root.render(<App tab="home" />);
function AppWithCallbackAfterRender() {
    return <App />
  }
  
  const container = document.getElementById('app');
  const root = createRoot(container!);
  root.render(<AppWithCallbackAfterRender />);

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob("./Pages/**/*.tsx")
        ),
    setup({ el, App, props }) {
        return root.render(<App {...props} />);
    },
});

InertiaProgress.init({ color: "#4B5563" });

function App() {
    //return <>Hello, World!</>;
  }
  export default App;