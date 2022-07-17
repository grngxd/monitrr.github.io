import { FiGithub } from 'react-icons/fi';
import { FiCreditCard } from 'react-icons/fi';
import { FiAtSign } from 'react-icons/fi';
import Button from './Button';
export default function Buttons() {
    return (
        <div className="flex gap-2 max-h-28 min-h-28 h-28 items-center">
                <Button icon={<FiGithub/>} href="https://github.com/monitrr"/>
                <Button icon={<FiCreditCard/>} href="https://ko-fi.com/monitrr"/>
                <Button icon={<FiAtSign/>} href="mailto:monitrrlmao@gmail.com"/>
        </div>
    )
}