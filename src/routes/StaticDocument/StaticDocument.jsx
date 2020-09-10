import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStaticPage } from './redux/actions';

const fakeData = {
  about: {
    alias: 'about',
    content: 'Go it force ',
    title: 'About Us',
  },
  'contact-us': {
    alias: 'contact-us',
    content: 'Contact us',
    title: 'Location: blalbal;bal;',
  },
};
class StaticDocument extends Component {
  componentDidMount() {
    this.props.fetchStaticPage(fakeData[this.props.match.params.document]);
  }
  componentDidUpdate(prevProps) {
    if (this.props.match.params.document !== prevProps.match.params.document) {
      this.props.fetchStaticPage(fakeData[this.props.match.params.document]);
    }
  }
  render() {
    const { title, content } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        <main>{content}</main>
      </div>
    );
  }
}

const mapStateToProps = ({ staticDocument }, ownProps) => ({
  ...staticDocument.find(({ alias }) => alias === ownProps.match.params.document),
});

const mapDispatchToProps = (dispatch) => ({
  fetchStaticPage: (payload) => dispatch(fetchStaticPage(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StaticDocument);
