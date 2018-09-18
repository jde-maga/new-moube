import { css } from "emotion";

const header = css(`
  display: flex;
  height: 4rem;
`);

const title = css(`
  color: #fff;
  margin-right: 0.5rem;
  margin-right: 1rem;
`);

const menu = css(`
  line-height: 4rem;
  flex: 1;
`);

const user = css(`
  color: #fff;
  flex: flex-grow;
`)

export default {
  title,
  header,
  menu,
  user
}