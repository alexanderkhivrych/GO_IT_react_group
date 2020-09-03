import React, { Suspense } from 'react';
import { CircularProgress } from '@material-ui/core';

const asyncComponent = (AsyncComponent) => ({ ...props }) => (
  <Suspense fallback={<CircularProgress />}>
    <AsyncComponent {...props} />
  </Suspense>
);

// const asyncComponent = ({ loader, loading: Loading }) => {
//   return class AsyncComponent extends Component {
//     state = {
//       component: null,
//     };

//     async componentDidMount() {
//       const { default: component } = await loader();

//       this.setState({ component });
//     }

//     render() {
//       const { component: LoadedComponent } = this.state;

//       return LoadedComponent ? <LoadedComponent {...this.props} /> : <Loading />;
//     }
//   };
// };

export default asyncComponent;
