import React from 'react';

import './List.css';
import Card from '../Card/Card';

let cardCount = 0;

const List = (props) => {
  return (
    <>
        <div className="list-container">
            <div className="list-header">
                <div className="list-header-left">
                    {
                        {
                            'status' : <>{
                                {
                                    'Backlog': <div className="list-icon">
                                    <span class="material-symbols-outlined backlog">stacks</span>
                                    </div>,

                                    'Todo': <div className="list-icon"><span class="material-symbols-outlined todo">circle</span>
                                    </div>,

                                    'In progress': <div className="list-icon"><span class="material-symbols-outlined in_progress">timelapse</span>
                                    </div>,

                                    'Done': <div className="list-icon">
                                    <span class="material-symbols-outlined done">check_circle</span>
                                    </div>,

                                    'Cancelled': <div className="list-icon">
                                    <span class="material-symbols-outlined cancel">cancel</span>
                                    </div>
                                }[props.listTitle]
                            } </>,
                            'user': <></>,
                            'priority' : <>{
                                {
                                    0: <div className="card-tag-icon"><span class="material-symbols-outlined">more_horiz</span></div>,

                                    1: <div className="card-tag-icon"><span class="material-symbols-outlined">signal_cellular_alt_1_bar</span></div>,

                                    2: <div className="card-tag-icon"><span class="material-symbols-outlined">signal_cellular_alt_2_bar</span></div>,

                                    3: <div className="card-tag-icon"><span class="material-symbols-outlined">signal_cellular_alt</span></div>,

                                    4: <div className="card-tag-icon"><span class="material-symbols-sharp high_priority">priority_high</span></div>,

                                }[props.listTitle]
                            } </>
                        }[props.groupValue]
                    }
                    
                    <div className="list-title">
                        {
                            {
                                'priority' : <>{
                                                props.priorityList
                                                    ? props.priorityList.map(priorityProperty => (
                                                        priorityProperty.priority === props.listTitle
                                                        ? <>{priorityProperty.name}</>
                                                        : null
                                                    ))
                                                    : null
                                                }</>,
                                'status' : <>{props.listTitle}</>,
                                'user' : <>{props.listTitle}</>
                            }[props.groupValue]
                        }
                    </div>
                    <div className="list-sum">{cardCount}</div>
                </div>
                <div className="list-header-right">
                    <div className="list-add-item">
                    <span class="material-symbols-outlined">add</span>
                    </div>
                    <div className="list-option-item">
                    <span class="material-symbols-outlined">more_horiz</span></div>
                </div>
            </div>

            <div className="list-card-items">
                {
                    props.ticketDetails.map(ticket => {
                        if(ticket.status === props.listTitle){
                            cardCount++;
                            return(<Card cardDetails={ticket} />)
                        }
                        else if(ticket.priority === props.listTitle){
                            cardCount++;
                            return(<Card cardDetails={ticket} />)
                        }
                        else if(ticket.userObj.name === props.listTitle){
                            cardCount++;
                            return(<Card cardDetails={ticket} />)
                        }
                        return null
                    }, cardCount = 0)
                    
                }
            </div>
        </div>
    </>
  )
}

export default List;
