/**
 * Created by Лев on 27.05.2018.
 */
import {Comment} from './comment';

export let CommentMass: Comment[]=[
  {
    commId:1,
    userId:0,
    text:"Hello",
    newsId:0,
    prevCommId:undefined,
  },
  {
    commId:3,
    userId:1,
    text:"Hello to you too",
    newsId:0,
    prevCommId:1,
  },
  {
    commId:2,
    userId:0,
    text:"Is anyone here",
    newsId:0,
    prevCommId:undefined,
  }
]
