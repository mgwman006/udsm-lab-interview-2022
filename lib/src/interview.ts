export function getProcessedData(
  yearOneData: any,
  yearTwoData: any,
  yearThreeData: any
) 
{
  // TODO:
  // 1. Remove data items that has reporting rate less than 50
  // 2. Combine relevant data (data of the same code) from each year inorder to compute average
  // 3. Compute average for the combined data to arrive to single value (average value)
  // 4. Return the averaged data as final output
  /***
   * [
      {
        value: 43,
        name: 'Number of members registered',
        code: 'MEMBER_REGISTERED',
      },
      {
        value: 17,
        name: 'Number of active members',
        code: 'ACTIVE_MEMBERS',
      },
    ]
   */
	
	let results:any[]=[];

	let regCount:number=0;
	let regSum:number=0;
    
	let activeCount:number=0;
	let activeSum:number=0;

        /*
		The lines of code from line 41 to line 60 claculate sum of values and 
		number of times the reporting for registed member is greater or equal to 50
		These variables will be used for calculating average.
	*/

	let regRate1:number=yearOneData[0].reportingRate;
	if(regRate1 >= 50)
	{
		regSum=regSum+yearOneData[0].value;
		regCount++;
	}
    
	let regRate2:number=yearTwoData[0].reportingRate;
	if(regRate2 >= 50)
        {
                regSum=regSum+yearTwoData[0].value;
                regCount++;
        }

	let regRate3:number=yearThreeData[0].reportingRate;
	if(regRate3 >= 50)
        {
                regSum=regSum+yearThreeData[0].value;
                regCount++;
        }


	 /*
                The lines of code from line 70 to line 88 claculate sum of values and
                number of times the reporting for active members is greater or equal to 50.
		These variables will be used for calculating average.
         */


	let activeRate1:number=yearOneData[1].reportingRate;
	if(activeRate1 >= 50)
        {
                activeSum=activeSum+yearOneData[1].value;
                activeCount++;
        }

	let activeRate2:number=yearTwoData[1].reportingRate;
	if(activeRate2 >= 50)
        {
                activeSum=activeSum+yearTwoData[1].value;
                activeCount++;
        }
	let activeRate3:number=yearThreeData[1].reportingRate;
	if(activeRate3 >= 50)
        {
                activeSum=activeSum+yearThreeData[1].value;
                activeCount++;
        }

	let avgReg:number=regSum/regCount;	        //Calculating average for registered members
	let avgActive:number=activeSum/activeCount;    //Calculating average for active members

	results.push( {
        value: avgReg,
        name: 'Number of members registered',
        code: 'MEMBER_REGISTERED'
	}); 

	results.push(
	{
        value: avgActive,
        name: 'Number of active members',
        code: 'ACTIVE_MEMBERS'
	});

	return results;
}
