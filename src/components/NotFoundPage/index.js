import React from 'react';
import asyncComponent from '../hoc/asyncComponent';
import { CircularProgress } from '@material-ui/core';

const AsyncNotFound = asyncComponent({
  loader: () => import('./NotFoundPage'),
  loading: () => <CircularProgress />,
});

export default AsyncNotFound;
