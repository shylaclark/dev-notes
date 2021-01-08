# User Stories

## How to write a user story
* A good user story is independent, negotiable, valuable, estimable, small, testable.
* The value statement (a.k.a. summary) should include:
  * WHO wants a feature.
  * WHAT feature they want.
  * WHY they want the feature. This may be tied into a business case if one exists.
* It is good practice to write the ‘Who’ statement in the stories from the perspective of an any person or group who will interact with the features being created. 
* Acceptance criteria is normally a list of questions, scenarios or examples that enable the customer to sign off the story as ‘done’.

## Format
Geocent and NRL follow this format.

<u>Value Statement</u>  
As a \<who>, I want \<what>, so that \<why>.

<u>Acceptance Criteria</u>  
AC 1:  Given \<starting condition>, when \<action occurs>, then \<expected result>.  
AC 2:  Given \<starting condition>, when \<action occurs>, then \<expected result>.

## Example

<u>Value Statement:</u>  
 As a user, I want to be able to replace the collective value in the helios XML with a variable, so that I can generate a set of experiments with my specified collective values.

<u>Testing Requirements:</u>  
1. Select tests/test_inputs/s76_mstrand9.1.xml
1. Choose Vary pitch and/or collective with velocity option
1. Leave Pitch (deg) (Calculated) and Collective (deg) (Calculated) selected

<u>Acceptance Criteria:</u>  
AC 1:  When the Continue button is clicked, then the calculated collective variable is substituted into the helios xml file.  
AC 2: When the warning appears that there is no where to substitute collective, then the collective checkbox, the collective column, and Blade Chord fields are not visible.

<u>Notes:</u>  
* Bob provided a file that will allow the substitution: s76_mstrand9.1.xml.
* Compound transform with x-axis to apply collective to.
* If first blade doesn't have compound transform, then warn user --> ERP-513.

<u>Questions:</u>  
| Questions   | Answers     |  
|-------------|-------------|  
|  What axis should the collective angle be applied to?	| x-axis (usually) good for v1.1   |

## Story Pointing
Points are based on a modified Fibonacci sequence: 1, 2, 3, 5, 8, 13, 20

## NRL Notes

Ben tips:  
* It's supposed to be the product owner (Bruce) who writes the stories, and the developers are supposed to ask questions to verify they understand; however, in practice, Ben and Bruce just sort of know what needs to be done, and have a hard time putting it into "story form."  
* Talk to Brittney. She wrote great stories for EPMA project. Dakota would also like to be there if she provides training on this.

D9K pointing:
* D9K says an "8" is one person, one sprint.
* 1 pt = 6 hrs = .60 x one 10-hr day  
* 4 pts per week
* Sprints are two weeks, so 4 story points per week.

## Resources
