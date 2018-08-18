import React, { Component } from 'react';
import EventListItems from './EventListItems';
class EventList extends Component {
  render() {
    const { events } = this.props;
    return (
      <div>
        <h1>Event List</h1>
        {events.map(event => (
          <EventListItems key={event.id} event={event} />
        ))}
      </div>
    );
  }
}
export default EventList;
