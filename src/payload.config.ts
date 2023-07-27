import dotenv from 'dotenv';
dotenv.config();
import { buildConfig } from 'payload/config';
import path from 'path';
import Users from './collections/Users';
import Products from './collections/Products';
import { Media } from './collections/Media';
import Menu from './collections/Menu';
import Special from './collections/Special';

export default buildConfig({
  serverURL: `${process.env.PAYLOAD_PUBLIC_SERVER_URL}`,
  admin: {
    user: Users.slug,
  },
  cors:["http://localhost:3000"],  
  collections: [
    Users,
    Menu,
    Special,
    Products,
    Media,

  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
})
