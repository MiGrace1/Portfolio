const script = `try{if(localStorage.getItem("theme")==="light")document.documentElement.dataset.theme="light"}catch{}`;

/** Runs before first paint so a light-theme visitor never sees a dark flash. */
export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
