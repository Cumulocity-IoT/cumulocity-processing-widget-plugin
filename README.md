# Processing Widget Plugin for Cumulocity [<img width="35" src="https://user-images.githubusercontent.com/32765455/211497905-561e9197-18b9-43d5-a023-071d3635f4eb.png"/>]()


This is the Cumulocity module federation plugin created using c8ycli. This plugin can be used in Application Builder or Cockpit. The Processing Widget is designed to display the current process state based on the latest event. Updates the state whenever a new event is received.

To deliver the expected functionality one need to set/select the following configuration parameters:
 1. Event Type(required)
 2. Device/Group (select)
 3. Field Name(required)
 4. Display Status for each state (atleast 1)
 5. Field value for each state (atleast 1)
 6. mat-icon name for each state(select)
 7. Include child devices - You can toggle the slider if you want the results for child devices also.


## Please note that this plugin is in currently under BETA mode.
  
### Please choose Compass Widget release based on Cumulocity/Application builder version:

|APPLICATION BUILDER  | CUMULOCITY  | COMPASS WIDGET   |
|-------------------- |------------ |------------------|
| 2.x.x(coming soon)  | >= 1016.x.x |	1.x.x          |

