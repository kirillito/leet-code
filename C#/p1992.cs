public class Solution {
    public int[][] FindFarmland(int[][] land) {
        List<int[]> res = new List<int[]>();
        int m = land.Length;
        int n = m > 0 ? land[0].Length : 0;
        
        for (int i=0; i<m; i++)
            for (int j=0; j<n; j++)
            {
                //found land
                if (land[i][j] == 1)
                {
                    int r2 = i;
                    int c2 = j;

                    //replace farm with forest and save coordinates
                    for (int k=i; k<m; k++)
                    {
                        if (land[k][j] != 1)
                            break;
                        for (int l=j; l<n; l++)
                        {
                            if (land[k][l] == 1)
                            {
                                land[k][l] = 0;
                                r2 = Math.Max(r2,k);
                                c2 = Math.Max(c2,l);
                            }
                            else
                                break;
                        }
                    }
                    res.Add(new int[] {i,j,r2,c2});
                }
            }

        return res.ToArray();
    }
}