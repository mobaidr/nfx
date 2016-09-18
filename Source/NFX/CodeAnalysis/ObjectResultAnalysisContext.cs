/*<FILE_LICENSE>
* NFX (.NET Framework Extension) Unistack Library
* Copyright 2003-2016 IT Adapter Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
</FILE_LICENSE>*/
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace NFX.CodeAnalysis
{

    /// <summary>
    /// A context that can hold analysis result as TObject.
    /// This class is useful for cases like dynamic language parsers (i.e. JSON)
    /// </summary>
    public abstract class ObjectResultAnalysisContext<TObject> : CommonCodeProcessor, IAnalysisContext where TObject : class
    {
        protected ObjectResultAnalysisContext(IAnalysisContext context, MessageList messages = null, bool throwErrors = false):
                                               base(context, messages, throwErrors)
        {

        }

        protected TObject m_ResultObject;

        public TObject ResultObject { get { return m_ResultObject;} }

    }
}
