import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
// import fs from 'fs/promises'; 

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}


// export async function getStaticProps() {
//   //const allPosts = getAllPosts();
//   const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
//   const jsonData = await fs.readFileAsync(filePath);
//   const data = JSON.parse(jsonData);

//   // const data = [{name: 'Dan', cnt: 29}, {name: 'Dave', cnt: 21}, {name: 'Greg', cnt: 33}, ];
//   return {
//     props: {
//       posts: data
//     },
//   };
// }
