import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import EmailTypeNav from '../../../src/email/components/EmailTypeNav';

describe('<EmailTypeNav/>', () => {
  it('should render with HTML active', () => {
    const emailId = '2';

    const wrapper = mount(
      <MemoryRouter initialEntries={['/email/2']}>
        <EmailTypeNav
          emailId={emailId}
        />
      </MemoryRouter>
    );

    expect(wrapper.find('a')).to.have.length(2);

    const htmlLink = wrapper.find('a').first();
    expect(htmlLink.hasClass('active')).to.equal(true);

    const textLink = wrapper.find('a').last();
    expect(textLink.hasClass('active')).to.equal(false);
  });

  it('should render with Plain Text active', () => {
    const emailId = '2';

    const wrapper = mount(
      <MemoryRouter initialEntries={['/email/2/text']}>
        <EmailTypeNav
          emailId={emailId}
        />
      </MemoryRouter>
    );

    expect(wrapper.find('a')).to.have.length(2);

    const htmlLink = wrapper.find('a').first();
    expect(htmlLink.hasClass('active')).to.equal(false);

    const textLink = wrapper.find('a').last();
    expect(textLink.hasClass('active')).to.equal(true);
  });
});
