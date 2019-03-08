import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import NoteRow from '../src/components/NoteRow';

describe('<NoteRow />', () => {
  it('should render', () => {
    const mockNote = { id: 'note1', val: 'note text'};
    const wrapper = shallow(<NoteRow note={mockNote}/>);
    expect(wrapper.find('tr')).to.have.length(1);
    expect(wrapper.find('td')).to.have.length(2);
    expect(wrapper.find('td').last().text()).to.equal('note text');
  });
});