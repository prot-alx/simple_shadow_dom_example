import React from 'react';
import { observer } from 'mobx-react';
import { createRoot } from 'react-dom/client';
import FormContent from './FormContent';

class ShadowForm extends React.Component {
  constructor(props) {
    super(props);
    this.shadowRef = React.createRef();
    this.root = null;
    this.state = { initialized: false };
  }

  componentDidMount() {
    this.setState({ initialized: true });
  }

  componentDidUpdate() {
    this.initializeShadowDOM();
  }

  componentWillUnmount() {
    if (this.root) {
      this.root.unmount();
      this.root = null;
    }
  }

  initializeShadowDOM() {
    const shadowHost = this.shadowRef.current;
    if (!shadowHost) {
      console.error('Shadow host is not available');
      return;
    }

    if (!shadowHost.shadowRoot) {
      const shadowRoot = shadowHost.attachShadow({ mode: 'open' });
      this.root = createRoot(shadowRoot);
    }

    if (this.root) {
      this.root.render(<FormContent />);
    }
  }

  render() {
    return <div ref={this.shadowRef}>Initialized: {this.state.initialized.toString()}</div>;
  }
}

const ObservedShadowForm = observer(ShadowForm);
export default ObservedShadowForm;
