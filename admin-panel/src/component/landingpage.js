import React , {Component } from 'react';

import {styles} from 'react-mdl';
import { FirebaseDatabaseProvider,FirebaseDatabaseNode } from 'firebase';
import firebase from 'firebase';
import config from './config/fire';


class landingpage extends Component
{
    state={
        limit : 2
    };

    render()
    {
        return (

            <div style={styles}>
        <FirebaseDatabaseProvider firebase={firebase} {...config}>
          <div>
            <FirebaseDatabaseNode
              path="user_bookmarks/"
              limitToFirst={this.state.limit}
              // orderByKey
              orderByValue={"created_on"}
            >
              {d => {
                return (
                  <React.Fragment>
                    <pre>Path {d.path}</pre>
                    <pre style={{ height: 300, overflow: "auto" }}>
                      Value {s(d.value)}
                    </pre>
                    <button
                      onClick={() => {
                        this.setState(state => ({ limit: state.limit + 2 }));
                      }}
                    >
                      Load more
                    </button>
                  </React.Fragment>
                );
              }}
            </FirebaseDatabaseNode>
          </div>
        </FirebaseDatabaseProvider>
      </div>
        );
    }
}


export default landingpage;