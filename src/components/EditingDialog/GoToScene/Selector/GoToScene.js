import React, {Component} from 'react';
import {H5PContext} from "../../../../context/H5PContext";
import './GoToScene.scss';
import GoToSceneSelector from "./GoToSceneSelector";

export default class GoToScene extends Component {

  render() {
    // Filter out current scene
    const scenes = this.context.params.scenes.filter(scene => {
      return scene.sceneId !== this.props.currentScene;
    });

    const sceneClasses = ['go-to-scene-selector'];
    if (this.props.hasInputError) {
      sceneClasses.push('has-error');
    }

    return (
      <div className={sceneClasses.join(' ')} >
        {
          scenes.length &&
          <div className='go-to-scene-selector-wrapper'>
            <GoToSceneSelector
              scenes={scenes}
              markedScene={this.props.markedScene}
              setNextSceneId={this.props.setNextSceneId.bind(this)}
            />
            <div className='selector-separator'>or</div>
          </div>
        }
        <div className='create-new-scene-wrapper'>
          <div>Create a new scene to go to:</div>
          <button
            className='h5p-new-scene-button'
            onClick={this.props.newScene.bind(this)}
          >+ New scene</button>
        </div>
      </div>
    );
  }
}

GoToScene.contextType = H5PContext;