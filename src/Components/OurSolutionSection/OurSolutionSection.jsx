import React from 'react'
import "./OurSolutionSection.css"
import Text from '../Text/Text'
import ImageComp from '../ImageComp/ImageComp'

export default function OurSolutionSection({SolutionDetails,SolutionImage1,Solution1,SolutionImage2,Solution2, SolutionImage3,Solution3,SolutionImage4}) {
  return (
    <div className="OurSolutionSection">
        <div class="SolutionHead">
          <Text
            text={"our solution"}
            TextTransform={"capitalize"}
            FontSize={"3rem"}
            FontWeight={"700"}
          />
          <Text
            Margin={"3rem 0rem 5rem 0rem"}
            text={SolutionDetails}
            FontSize={"2.8rem"}
          />
        </div>
        <div className="SolutionDetails">
          <div className="SolutionCol1">
            <div className="SolutionItem">
              <ImageComp
                Src={SolutionImage1}
                Width={"100%"}
              />
              <Text
                Margin={"5rem 0rem"}
                text={
                  Solution1
                }
                FontSize={"2.8rem"}
              />
            </div>
            <div className="SolutionItem">
              <ImageComp
                Src={SolutionImage2}
                Width={"100%"}
              />
              <Text
                Margin={"5rem 0rem"}
                text={Solution2
                }
                FontSize={"2.8rem"}
              />
            </div>
          </div>
          <div className="SolutionCol2">
            <div className="SolutionItem">
              <ImageComp
                Src={SolutionImage3}
                Width={"100%"}
              />
              <Text
                Margin={"5rem 0rem"}
                text={Solution3
                }
                FontSize={"2.8rem"}
              />
            </div>
            <div className="SolutionItem">
              <ImageComp
                Src={SolutionImage4}
                Width={"100%"}
              />
            </div>
          </div>
        </div>
      </div>
  )
}
