import { IconSectionProps } from '../ui-interfaces/IconSectionType'
import './iconsection.css'

const IconSection = ({ iconSections }: IconSectionProps) => {
  return(
    <div className='row'>
        {iconSections.map((iconSection, index) => {
            return(
                <div className='col s12 m4' key={index}>
                    <div className='icon-block'>
                        <h2 className='center teal-text text-lighten-4'>
                            <i className='material-icons'>{iconSection.iconName}</i>
                        </h2>
                        <h5 className='center darkText'>{iconSection.headLineMessage}</h5>
                        <p className='light darkText'>{iconSection.bodyMessage}</p>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default IconSection