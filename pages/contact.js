// pages/about.js

import withLayout from '../components/MyLayout.js';
import Header from "../components/Header.js"

Header();

const Page = () => <p>This is the contact page</p>;

export default withLayout(Page);