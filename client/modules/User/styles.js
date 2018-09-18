import { css } from "emotion";

const container = css(`
  > * {
    margin-bottom: 1rem;
  }
`);

const profileCard = css(`
  display: flex;
`);

const profileCardInfos = css(`
  margin-left: 1rem;
`);

export default {
  container,
  profileCard,
  profileCardInfos
}
