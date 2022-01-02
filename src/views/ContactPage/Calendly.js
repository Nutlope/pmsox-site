// Calendly Integration
import React from 'react';

class Calendly extends React.Component {
  componentDidMount() {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute(
      'src',
      'https://assets.calendly.com/assets/external/widget.js',
    );
    head.appendChild(script);
  }
  componentWillUnmount() {
    // whatever you need to cleanup the widgets code
  }

  render() {
    return (
      <div>
        <div id="schedule_form">
          <div
            class="calendly-inline-widget"
            data-url="https://calendly.com/sas70"
            style={{ minWidth: '320px', height: '580px' }}
          />
        </div>
      </div>
    );
  }
}

export default Calendly;
