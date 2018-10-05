import React, { Component } from 'react';
import ReviewStar from './ReviewStar';

 
class ReviewForm  extends  Component{

    constructor(props){
        super(props);
        this.state = {
            CourseCode: this.props.CourseCode,
            CourseStars: this.props.CourseStar,
            CourseName: this.props.CourseName,
            CourseTerm: this.props.CourseTerm,
            CountStars: 0,                                            // the star given by user.
        }
    }

    deleteUndefined(){
        if(this.state !== undefined){
            //console.log(this.state)
            return(<ReviewStar key={this.state.CourseCode} index ={this.state.CourseCode} CourseCode={this.state.CourseCode} CourseStar={this.state.CourseStars} />)

        }
    }

    
    render(){
        return(
            <div>

                <tr>
                    <td width="10%" id="CourseID">{this.state.CourseCode}</td>
                    <td width="70%" id="CourseDitails">{this.state.CourseName}</td>
                    <td width="20%" id="Star">
                    {this.deleteUndefined()}
                    </td>	
                </tr> 
            
            </div>
        );

    }

}


export default ReviewForm;


