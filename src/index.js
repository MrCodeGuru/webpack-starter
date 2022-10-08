import "./style.css";
import html from "./templates/welcome.html";

function getTemplateElement() {
  const range = document.createRange();
  range.selectNode(document.body);
  const documentFragment = range.createContextualFragment(html);

  return documentFragment;
  // Lodash, now imported by this script
}
document.body.appendChild(getTemplateElement());
