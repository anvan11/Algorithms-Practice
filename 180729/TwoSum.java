package Easy;

import java.util.Arrays;

public class TwoSum {
	public static int[] sumoftwo(int[] num, int target){
		int[] result = new int[2];
		for(int i=0; i<num.length-1; i++){
			for(int j=i+1; j<num.length; j++){
				if (num[i] + num[j] == target){
					result[0]= i;
					result[1]= j;
					}
			}
		}
		return result;
	}
	
	public static void main(String[] args){
		int[] i= {2,5,5,11};
		int[] j = sumoftwo(i,10);
		System.out.println(Arrays.toString(j));
	}
}
