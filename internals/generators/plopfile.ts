import { NodePlopAPI } from "node-plop";
import { styledGenerator } from "./component";
import { containerGenerator } from "./container";

import shell from "shelljs";

interface CustomActionData {
  path: string;
  file?: string;
}

/**
 * Every generated backup file gets this extension
 */
export const BACKUPFILE_EXTENSION = "rbgen";

export default function plop(plop: NodePlopAPI) {
  plop.setGenerator("simple component", styledGenerator);
  plop.setGenerator("container", containerGenerator);

  plop.setActionType("prettify", (answers, config) => {
    const data = config.data as CustomActionData;
    shell.exec(`prettier --write "${data.path}"`, { silent: true });
    return "";
  });
}
