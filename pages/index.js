// pages/index.js

import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import Layout from '../components/MyLayout.js';

export default function Index() {
	return (
	  <Layout>
		<p>Hello Next.js</p>
	  </Layout>
	);
  }
